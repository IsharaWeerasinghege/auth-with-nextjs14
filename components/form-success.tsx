import {CheckCircledIcon, ExclamationTriangleIcon} from "@radix-ui/react-icons";

interface FormSuccessProps {
    message?: string;
}

export const FormSuccess = ({message}: FormSuccessProps) => {
    if (!message) {
        return null;
    }

    return (
        <div className="bg-emerald-500/15 p-3 rounded-md flex items-center text-emerald-500 text-sm">
            <CheckCircledIcon className="w-4 h-4 mr-2" />
            <p>
                {message}
            </p>
        </div>
    );
}