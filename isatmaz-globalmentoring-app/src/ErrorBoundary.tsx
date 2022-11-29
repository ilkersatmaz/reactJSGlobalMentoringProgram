import React, { Component, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface State {
    error: null | string;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
        };
    }
    static getDerivedStateFromError(error: Error): State {
        return { error: error.toString() };
    }

    render() {
        if (this.state.error) {
            return (
                <>
                    <h2>Something went wrong</h2>
                    <p>
                        Please contact the administrator and mention the below:
                    </p>
                    <p>{this.state.error}</p>
                </>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;