# Uber-Clone Frontend

This is the frontend for the Uber-Clone project, built using React and Vite.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Harshbailurkar/Uber-Frontend.git
   ```

2. Navigate to the frontend directory:

   ```sh
   cd uber-clone/frontend
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
```

or

```sh
yarn dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the application for production, run:

```sh
npm run build
```

or

```sh
yarn build
```

The built files will be in the `dist` directory.

### Linting

To lint the code, run:

```sh
npm run lint
```

or

```sh
yarn lint
```

## Project Structure

The project structure is as follows:

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   ├── pages/              # Page components
│   ├── services/           # API service functions
│   ├── styles/             # CSS and styling files
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point for the application
│   └── ...                 # Other files
├── .eslintrc.js            # ESLint configuration
├── .gitignore              # Git ignore file
├── index.html              # HTML template
├── package.json            # npm/Yarn dependencies and scripts
├── README.md               # This README file
└── vite.config.js          # Vite configuration
```

## Available Scripts

In the project directory, you can run:

- `npm run dev` or `yarn dev`: Runs the app in development mode.
- `npm run build` or `yarn build`: Builds the app for production.
- `npm run lint` or `yarn lint`: Lints the code.

## Learn More

To learn more about React and Vite, check out the following resources:

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for more information.
