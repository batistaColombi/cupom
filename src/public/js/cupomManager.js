document.addEventListener("DOMContentLoaded", () => {
    const couponList = document.getElementById("couponList");
    const couponCodeInput = document.getElementById("couponCode");
    const addCouponButton = document.getElementById("addCoupon");

    // Function to create a coupon item
    function createCouponItem(code) {
        const li = document.createElement("li");
        li.className = "coupon-item";

        const codeSpan = document.createElement("span");
        codeSpan.textContent = code;
        codeSpan.className = "coupon-code";

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-button";
        editButton.addEventListener("click", () => editCoupon(li, codeSpan));

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-button";
        removeButton.addEventListener("click", () => li.remove());

        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Activate";
        toggleButton.className = "toggle-button";
        toggleButton.addEventListener("click", () => toggleCoupon(toggleButton));

        li.appendChild(codeSpan);
        li.appendChild(editButton);
        li.appendChild(toggleButton);
        li.appendChild(removeButton);

        couponList.appendChild(li);
    }

    // Function to edit a coupon
    function editCoupon(item, codeSpan) {
        const editContainer = document.createElement("div");
        const input = document.createElement("input");
        input.type = "text";
        input.value = codeSpan.textContent;
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", () => {
            const newCode = input.value.trim();
            if (newCode) {
                codeSpan.textContent = newCode;
                editContainer.remove();
            } else {
                alert("Coupon code cannot be empty.");
            }
        });
        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", () => editContainer.remove());

        editContainer.appendChild(input);
        editContainer.appendChild(saveButton);
        editContainer.appendChild(cancelButton);

        item.appendChild(editContainer);
    }

    // Function to toggle coupon activation status
    function toggleCoupon(button) {
        if (button.textContent === "Activate") {
            button.textContent = "Deactivate";
            button.parentElement.classList.add("active");
        } else {
            button.textContent = "Activate";
            button.parentElement.classList.remove("active");
        }
    }

    // Add coupon event listener
    addCouponButton.addEventListener("click", () => {
        const code = couponCodeInput.value.trim();
        if (code) {
            createCouponItem(code);
            couponCodeInput.value = "";
        } else {
            alert("Please enter a valid coupon code.");
        }
    });
});
