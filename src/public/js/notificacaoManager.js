document.addEventListener("DOMContentLoaded", () => {
    const notificationList = document.getElementById("notificationList");
    const notificationMessageInput = document.getElementById("notificationMessage");
    const addNotificationButton = document.getElementById("addNotification");

    // Function to create a notification item
    function createNotificationItem(message) {
        const li = document.createElement("li");
        li.className = "notification-item";

        const messageSpan = document.createElement("span");
        messageSpan.textContent = message;
        messageSpan.className = "notification-message";

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-button";
        editButton.addEventListener("click", () => editNotification(li, messageSpan));

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-button";
        removeButton.addEventListener("click", () => li.remove());

        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Activate";
        toggleButton.className = "toggle-button";
        toggleButton.addEventListener("click", () => toggleNotification(toggleButton));

        li.appendChild(messageSpan);
        li.appendChild(editButton);
        li.appendChild(toggleButton);
        li.appendChild(removeButton);

        notificationList.appendChild(li);
    }

    // Function to edit a notification
    function editNotification(item, messageSpan) {
        const editContainer = document.createElement("div");
        const input = document.createElement("input");
        input.type = "text";
        input.value = messageSpan.textContent;
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", () => {
            const newMessage = input.value.trim();
            if (newMessage) {
                messageSpan.textContent = newMessage;
                editContainer.remove();
            } else {
                alert("Notification message cannot be empty.");
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

    // Function to toggle notification activation status
    function toggleNotification(button) {
        if (button.textContent === "Activate") {
            button.textContent = "Deactivate";
            button.parentElement.classList.add("active");
        } else {
            button.textContent = "Activate";
            button.parentElement.classList.remove("active");
        }
    }

    // Add notification event listener
    addNotificationButton.addEventListener("click", () => {
        const message = notificationMessageInput.value.trim();
        if (message) {
            createNotificationItem(message);
            notificationMessageInput.value = "";
        } else {
            alert("Please enter a valid notification message.");
        }
    });
});
