import { useEffect } from "react";

function Animation({ children }) {
	const introAnimation = () => {
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
				duration: 0.8,
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
				duration: 0.8,
				stagger: 0.2,
			},
			"-=0.6"
		);

		gsap.to(".App", {
			opacity: 1,
			duration: 0.5,
			ease: "power2.out",
		});
	};

	useEffect(() => {
		introAnimation();
	}, []);

	return <>{children}</>;
}

export default Animation;
