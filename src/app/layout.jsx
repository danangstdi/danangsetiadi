import DotsAnimation from "@/components/partials/layout/DotsAnimation";
import "./globals.css";

export const metadata = {
  title: "Danang Setiadi",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const blurElements = [
    'h-40 w-72 right-0 top-10 md:top-20 md:right-32 md:h-72 md:w-96',
    '-right-0 top-96 h-28 w-96',
    'hidden right-96 top-64 h-40 w-72',
    'hidden left-80 top-80 h-40 w-72',
    'hidden right-[40rem] -top-32 h-40 w-72'
  ]

  return (
    <html lang="en">
      <body className='poppins'>
        {children}
        <div className="max-w-full overflow-hidden">
          {blurElements.map((element) => (
            <span key={element} className={`${element} absolute -z-50 blur-3xl opacity-40 bg-gradient-to-tr from-pink-300 to-emerald-500 rounded-full lg:block`}></span>
          ))}
        </div>
        <DotsAnimation/>
      </body>
    </html>
  );
}
