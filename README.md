# Ryde 🚗

**Ryde** is a ride-hailing app inspired by Uber, built using React Native, Expo, Expo Router, and Tailwind CSS (via NativeWind). The backend is powered by PostgreSQL. This project is a hobby project aimed at learning and exploring modern mobile app development and backend technologies.

## Features ✨

- **User Authentication**: Sign up, log in, and manage user profiles.
- **Ride Booking**: Users can book rides and track their rides in real-time.
- **Driver Assignment**: Drivers are automatically assigned to nearby users.
- **Live Location Tracking**: Real-time location tracking of both users and drivers.
- **Ride History**: Users can view their past rides and trip details.
- **Payment Integration**: Secure payment gateway integration (planned).
- **Push Notifications**: Real-time updates and notifications (planned).

## Tech Stack 🛠️

- **Frontend**:
  - [React Native](https://reactnative.dev/) - For building cross-platform mobile apps.
  - [Expo](https://expo.dev/) - A framework and platform for universal React applications.
  - [Expo Router](https://expo.dev/router) - File-based routing for React Native apps.
  - [Tailwind CSS](https://tailwindcss.com/) (with [NativeWind](https://www.nativewind.dev/)) - Utility-first CSS framework for styling.
- **Backend**:

  - **Neon DB (PostgreSQL)** - A cloud-native, serverless PostgreSQL database for storing and managing data.

- **Tools**:
  - **NativeWind** - A library for using Tailwind CSS in React Native.
  - **Expo CLI** - Command-line interface for developing Expo apps.
  - **Node.js** - JavaScript runtime for backend services.

## Getting Started 🚀

Follow the instructions below to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed (v14 or above recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed globally
- [PostgreSQL](https://www.postgresql.org/download/) installed and running

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/ryde.git
   cd ryde
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the PostgreSQL database**:

   - Create a new PostgreSQL database.
   - Update the database configuration in `config/database.js` with your PostgreSQL credentials.

4. **Run database migrations**:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the Expo development server**:

   ```bash
   npx expo start
   ```

### Running on iOS/Android

- **iOS**: Use the Expo Go app on an iPhone or run on an iOS simulator.
- **Android**: Use the Expo Go app on an Android phone or run on an Android emulator.

## Contributing 🤝

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any ideas or find bugs.

### TODO List 📝

- Implement payment gateway integration.
- Add unit and integration tests.
- Implement push notifications.
- Enhance UI/UX with custom animations.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NativeWind](https://www.nativewind.dev/)
- [Neon DB](https://neon.tech/)
- [PostgreSQL](https://www.postgresql.org/)
