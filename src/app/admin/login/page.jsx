import LoginForm from '@/components/admin/LoginForm';

export default function AdminLoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                <div>
                    <h2 className="text-center text-3xl font-bold text-gray-900 tracking-tight">
                        Syntax Admin
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Sign in to access your dashboard
                    </p>
                </div>

                <LoginForm />

                <div className="mt-6 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} SyntaxWeb. All rights reserved.
                </div>
            </div>
        </div>
    );
}
