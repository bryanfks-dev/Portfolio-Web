function Error() {
    return (
        <section className="select-none relative w-full min-h-screen px-7 md:px-16 lg:px-16 xl:px-52 flex flex-col justify-center" id="error">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center">
                    <h1 className="text-primary-color font-bold">Error 404</h1>
                    <p className="text-tertiary-color font-bold">Page not found</p>
                </div>
                <h2 className="bg-exclusive-white bg-opacity-80 p-1.5 w-full text-center text-2xl shadow">Page is not exist. Please re-check your URI</h2>
            </div>
        </section>
    );
}

export default Error;