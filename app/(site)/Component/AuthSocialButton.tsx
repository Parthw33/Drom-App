import { IconType } from 'react-icons';

interface AuthSocialButtonProps{
    icon: IconType;
    label: string;
    onClick: () => void;

}

const AuthSocialButton:React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    onClick,

}) => {
    return(
        <button
            type="button"
            onClick={onClick}
            className="
                inline-flex
                w-full
                justify-center
                py-2
                px-4
                text-sm
                ring-grey-300
                font-semibold
                shadow-sm
                rounded-md
                focus-visible:outline
                focus-visible:outline-2
                focus:outline-offset-0
                bg-white
                text-gray-500
                hover:bg-gray-50"
        >
            <Icon />
        </button>
    )
}

export default AuthSocialButton;