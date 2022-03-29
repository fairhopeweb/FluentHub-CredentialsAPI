// Import dependencies
const bcrypt = require("bcrypt");

(async () => {
    // Hash the password
    const salt = await bcrypt.genSalt(15);
    console.log("----------------------------------------------------")
    console.log(salt);
    console.log("----------------------------------------------------");
    //In the line below, you need to change the "123" to your app GUID that you can found in your .csproj file.
    console.log(await bcrypt.hash("123", salt));
})();