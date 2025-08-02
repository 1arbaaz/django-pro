'use client';

interface MenuLinkProps {
    label: string;
    onClick: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({
    label,
    onClick
}) => {
    return (
        <div 
            onClick={onClick}
            className="px-5 py-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-800 dark:text-gray-200"
        >
            {label}
        </div>
    )
}

export default MenuLink;
