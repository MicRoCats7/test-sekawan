import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { useNavigate } from "react-router-dom"

export function CardLogin() {
    const navigate = useNavigate()

    return (
        <Card className="w-[400px] xl:h-full">
            <CardHeader className="flex flec-col items-center justify-center mt-5">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardDescription className="pb-6 text-lg font-semibold text-gray-400">Dashboard Kit</CardDescription>
                <CardTitle className="pb-2 text-2xl font-semibold">Log In to Dashboard Kit</CardTitle>
                <CardDescription className="text-sm text-gray-400 font-medium">Enter your email and password below</CardDescription>
            </CardHeader>
            <CardContent className="md:pt-6">
                <form className="pb-5">
                    <div className="grid w-full items-center gap-6">
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="email" className="text-xs text-gray-400 font-medium">EMAIL</Label>
                            <Input id="email" placeholder="Email address" type="email" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="flex justify-between w-full items-center">
                                <Label htmlFor="password" className="text-xs text-gray-400 font-medium">PASSWORD</Label>
                                <Label htmlFor="password" className="text-xs text-gray-400 font-medium hover:border-b-blue-500 hover:border-b">Forget Password?</Label>
                            </div>
                            <Input id="password" placeholder="Password" />
                        </div>
                    </div>
                </form>
                <Button
                    className="w-full h-[55px] bg-blue-500 hover:bg-blue-900"
                    onClick={() => navigate('/dashboard/overview')}
                >
                    Log in
                </Button>
            </CardContent>
            <CardFooter className="flex justify-center">
                <CardDescription className="text-sm text-gray-400 font-medium">
                    Don't have an account?
                    <span className="text-sm text-blue-500 font-medium"> Sign up</span>
                </CardDescription>
            </CardFooter>
        </Card>
    )
}
