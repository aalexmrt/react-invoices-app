export default function MainLayout({ children }) {
  return (
    <div className="min-h-[100vh] md:mx-3rem lg:mx-[5rem] xl:mx-[7rem] 2xl:mx-[10rem] flex flex-col gap-4 items-center justify-center ">
      {children}
    </div>
  )
}
