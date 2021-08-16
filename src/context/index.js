import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Container from '../components/Styles/Container';
import Alert from './../components/Alert';

const ErrorFallBack = () => {
    return (
        <div>
            Huh! Something went wrong !
        </div>
    )
}

export const ErrorsContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [error, setError] = React.useState('');

    return (
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
            <ErrorsContext.Provider value={{ error, setError }}>
                <Container>
                    {!!error && <Alert error={error} />}
                    {children}
                </Container>
            </ErrorsContext.Provider>
        </ErrorBoundary>
    )
}