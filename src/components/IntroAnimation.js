import { useEffect } from "react";

function IntroAnimation({ children }) {
	const introAnimation = () => {
		// eslint-disable-next-line
		const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

		tl.fromTo(
			".intro_animation",
			{
				y: 20,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				stagger: 0.3,
			}
		).fromTo(
			".article_animation",
			{
				y: 20,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				stagger: 0.2,
			},
			"-=0.6"
		);
	};

	useEffect(() => {
		introAnimation();
	}, []);

	return <>{children}</>;
}

export default IntroAnimation;
