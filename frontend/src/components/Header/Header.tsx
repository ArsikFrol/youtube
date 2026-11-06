import Logo from "./Logo";
import Profile from "./Profile";
import Search from "./Search/Search";

export default function Header() {
    return (
        <div className="flex items-center justify-between px-[10px] my-[10px]">
            <Logo />
            <Search />
            <Profile />
        </div>
    )
}