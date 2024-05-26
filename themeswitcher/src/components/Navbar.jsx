import { useTheme } from "../context/theme"

function Navbar() {

    const {themeMode, darkTheme, lightTheme} = useTheme();

    const changeTheme = (e) => {
        const mode = e.currentTarget.checked
        if (mode) {
            darkTheme();
        } else {
            lightTheme();
        }
    }

    return (
        <>
            <div className="px-4 py-2 bg-blue-300 border-gray-300 border flex justify-between items-center flex-wrap">
                <ul className="flex justify-start items-center flex-wrap gap-4">
                    <li className="text-base text-blue-900 font-bold">Home</li>
                    <li className="text-base text-blue-900 font-bold">Products</li>
                    <li className="text-base text-blue-900 font-bold">About</li>
                    <li className="text-base text-blue-900 font-bold">Contact</li>
                </ul>
                <div className="flex items-center gap-2">
                    <span>Light</span>
                    <label className="relative inline-flex cursor-pointer items-center">
                        <input id="switch" type="checkbox" onChange={changeTheme} checked={themeMode === "dark"} className="peer sr-only" />
                        <label for="switch" className="hidden"></label>
                        <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                    </label>
                    <span>Dark</span>
                </div>
            </div>
        </>
    )
}

export default Navbar