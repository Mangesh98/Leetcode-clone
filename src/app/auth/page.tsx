import Navbar from "@/components/Navbar";
import AuthModel from "@/components/models/AuthModel";
import Image from "next/image";

export default function AuthPage() {
	return (
		<>
			<div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
				<div className="max-w-7xl mx-auto">
					<Navbar />
					<div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
						<Image src="/hero.png" alt="hero image" width={700} height={700} />
					</div>
                    <AuthModel/>
				</div>
			</div>
		</>
	);
}
