
        function setUsername() {
            var username = document.getElementById("username").value;
            document.cookie = "username=" + username + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            alert("Username set successfully!");
        }

        function getUsername() {
            var username = document.cookie.split(';')[0].split('=');
            alert("Username is: " + username[1]);
        }

        function deleteUsername() {
            document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            alert("Username deleted successfully!");
        }
