export interface Profile {
	name: string;
	role: string;
	whatsappNumber: string;
	whatsappDisplay: string;
	whatsappMessage: string;
	tagline: string;
	introParagraphs: string[];
	ctaLine: string;
	closingLine: string;
	closingHeadline: string;
	footerSupport: string;
	footerCopyright: string;
}

export const profile: Profile = {
	name: "عبدالرحمن خليل",
	role: "كاتب إعلانات (Copywriter)",
	whatsappNumber: "966598220948",
	whatsappDisplay: "+966 59 822 0948",
	whatsappMessage: "السلام عليكم، حبيت أستفسر عن خدمات كتابة الإعلانات",
	tagline: "أنا مو بيّاع كلام.. أنا كلامي بيّاع",
	introParagraphs: [
		"كلنا نحتاج أحيانًا كلمة تحفّزنا على اتخاذ قرار، حتى لو كنا عارفين إننا نحتاجه.. وعميلك مو استثناء.",
		"وهنا يجي شغلي.",
	
	"أنا عبدالرحمن خليل، كاتب إعلانات سعودي (كوبي رايتر)، أدرس منتجك وأفهم جمهوره، وأصيغ له نص إعلان إقناعي؛ بكلمات تشد العميل لآخر كلمة من الإعلان، وتقنع بقيمة المنتج، وتحفز للشراء.",
	],
	ctaLine: "راسلني الآن على الواتساب:",
	closingLine: "خذ مني كلمات تبيع",
	closingHeadline: "الكمات الصح بتفرق..وكلماتي تصنع فارق لعلامتك. ",
	footerSupport: "كلمني عن منتجك، وبكتب عنه إعلان يميزه.",
	footerCopyright: "جميع الحقوق محفوظة لدى ابن خليل",
};

export const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`;
