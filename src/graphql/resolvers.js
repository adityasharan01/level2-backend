const User = require("../models/User");

const resolvers = {
    Query: {
        getUser: async (_, { email }) => {
            return await User.findOne({ email });
        },
    },
    Mutation: {
        updateUserColorPreference: async (_, { email, colorPreference }) => {
            return await User.findOneAndUpdate(
                { email },
                { colorPreference },
                { new: true }
            );
        },
        loginUser: async (_, { email, password }) => {
            // Implement your authentication logic here (e.g., using bcrypt to compare the hashed password).
            const user = await User.findOne({ email });
            if (user && passwordIsCorrect) {
                return user;
            } else {
                throw new Error("Invalid email or password");
            }
        },
    },
};

module.exports = resolvers;