import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "@/lib/firebase-config";
import { useTranslation } from "react-i18next";

export function CardLogin() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long.");
            return;
        } else {
            setPasswordError("");
        }

        setLoading(true);

        try {
            const usersCollection = collection(db, 'users');
            const q = query(usersCollection, where("email", "==", email), where("password", "==", password));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.size === 1) {
                toast.success(t('login.login_success'));
                navigate('/dashboard/overview');
                const data = querySnapshot.docs.map(doc => doc.data());
                localStorage.setItem('loggedInUserData', JSON.stringify(data));
            } else {
                toast.error(t('login.login_error'));
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error(t('login.error'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="w-[400px] xl:h-full">
            <CardHeader className="flex flex-col items-center justify-center mt-5">
                <Avatar>
                    <AvatarImage src="https://t4.ftcdn.net/jpg/06/72/83/45/360_F_672834524_tkai3agXh84WTgwqMN6y8vyaeEFYBvHY.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardDescription className="pb-6 text-lg font-semibold text-gray-400">{t('login.title')}</CardDescription>
                <CardTitle className="pb-2 text-2xl font-semibold">{t("login.subtitle")}</CardTitle>
                <CardDescription className="text-sm text-gray-400 font-medium">{t('login.description')}</CardDescription>
            </CardHeader>
            <CardContent className="md:pt-6">
                <form onSubmit={handleLogin} className="pb-5">
                    <div className="grid w-full items-center gap-6">
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="email" className="text-xs text-gray-400 font-medium uppercase">{t('login.email')}</Label>
                            <Input
                                id="email"
                                placeholder="Email address"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-2 mb-10">
                            <div className="flex justify-between w-full items-center">
                                <Label htmlFor="password" className="text-xs text-gray-400 font-medium">{t('login.password')}</Label>
                                <Label htmlFor="password" className="text-xs text-gray-400 font-medium hover:border-b-blue-500 hover:border-b">{t('login.forgot')}</Label>
                            </div>
                            <Input
                                id="password"
                                placeholder="Password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {passwordError && <p className="text-xs text-red-500">{passwordError}</p>}
                        </div>
                    </div>
                    <Button
                        className="w-full h-[55px] bg-blue-500 hover:bg-blue-900"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : t('login.login')}
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center">
                <CardDescription className="text-sm text-gray-400 font-medium">
                    {t('login.dont_have_account')}
                    <span className="text-sm text-blue-500 font-medium">{t('login.signup')}</span>
                </CardDescription>
            </CardFooter>
        </Card>
    )
}
