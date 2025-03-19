import Button from "@/core/components/atoms/Button";

const Contact = () => {
	return (
		<div className="flex flex-col items-center justify-between gap-6 rounded-3xl  bg-blue-700 px-8 py-12 lg:flex-row">
			<div className="space-y-3 text-center lg:w-[45%] lg:space-y-5 lg:text-start ">
				<h2 className="h-fit py-2 text-xl font-semibold text-light-100 lg:text-3xl 2xl:text-4xl overflow-hidden">
				Démarrer avec PIXDIGIT maintenant.<span className='text-[70px] text-[#DC0000]'>.</span> 
				</h2>
				<p className="text-sm/6 font-medium text-light-100 lg:text-base/8 xl:text-lg/8">
				Nos solutions sont conçues pour accompagner chaque étape de votre croissance. Nous sommes le moyen le plus rapide et le plus simple pour faire vivre une expérience spéciale à votre cible.
				</p>
			</div>

			<Button className="text-[#07161b]">Contact nous </Button>
		</div>
	);
};

export default Contact;
