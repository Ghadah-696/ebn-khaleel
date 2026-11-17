const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* 1) التعاقب: أول عنصر بلا تأخير، وكل عنصر بعده يتأخر 90ms */
document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
	group.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el, i) => {
		el.style.setProperty("--reveal-delay", `${Math.min(i, 8) * 90}ms`);
	});
});

/* 2) الظهور عند التمرير */
const items = document.querySelectorAll<HTMLElement>("[data-reveal]");

if (reduceMotion || !("IntersectionObserver" in window)) {
	items.forEach((el) => el.classList.add("is-visible"));
} else {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			});
		},
		{ threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
	);
	items.forEach((el) => observer.observe(el));
}

/* 3) العمق (Parallax) */
const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

if (!reduceMotion && layers.length) {
	let queued = false;

	const update = () => {
		const vh = window.innerHeight;
		layers.forEach((el) => {
			const rect = el.getBoundingClientRect();
			if (rect.bottom < -100 || rect.top > vh + 100) return;
			const distance = rect.top + rect.height / 2 - vh / 2;
			const speed = parseFloat(el.dataset.parallax ?? "0.04");
			el.style.setProperty("--parallax-y", `${(-distance * speed).toFixed(1)}px`);
		});
		queued = false;
	};

	const request = () => {
		if (queued) return;
		queued = true;
		window.requestAnimationFrame(update);
	};

	window.addEventListener("scroll", request, { passive: true });
	window.addEventListener("resize", request);
	update();
}