import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-6 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-2 text-sm text-gray-500">
                    <p className="flex items-center gap-1">
                        Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by{' '}
                        <span className="font-semibold text-gray-900">Shubham modi</span>
                    </p>
                    <p>© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
