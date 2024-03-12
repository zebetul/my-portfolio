import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { ABOUT_ME } from "../../constants/constants";
import { useState, useEffect } from "react";

// Setting the workerSrc path from a CDN , doesn't work in local
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const CVPage = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		window.addEventListener("resize", () => setScreenWidth(window.innerWidth));

		return () =>
			window.removeEventListener("resize", () =>
				setScreenWidth(window.innerWidth)
			);
	}, []);

	return (
		<div
			className="cv_page_container flex flex-col xl:items-center"
			style={
				isLoaded
					? { opacity: 1, transition: "opacity 0.5s ease-in-out" }
					: { opacity: 0 }
			}>
			<section className="cv_page_container_section xl:my-10">
				<Document
					className="cv_page_container_pdf relative"
					file={ABOUT_ME.contact.cv}
					onLoadSuccess={() => setIsLoaded(true)}
					onLoadError={() => setIsLoaded(false)}>
					<Page
						pageNumber={1}
						renderTextLayer={false}
						renderAnnotationLayer={false}
						width={screenWidth > 800 ? 800 : screenWidth}
					/>

					<a
						className="cv_download_link absolute top-0 right-0 p-2 xl:p-5 flex gap-2 items-center justify-center text-xl"
						href={ABOUT_ME.contact.cv}
						target="_blank"
						rel="noreferrer"
						download>
						<AiOutlineDownload size={30} />
						PDF
					</a>
				</Document>
			</section>
		</div>
	);
};

export default CVPage;
