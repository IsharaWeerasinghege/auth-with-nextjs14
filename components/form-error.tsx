import {ExclamationTriangleIcon} from "@radix-ui/react-icons";

interface FormErrorProps {
    message?: string;
}

export const FormError = ({message}: FormErrorProps) => {
    if (!message) {
        return null;
    }

    return (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center text-red-500 text-sm">
            <ExclamationTriangleIcon className="w-4 h-4 mr-2" />
            <p>
                {message}
            </p>
        </div>
    );
}