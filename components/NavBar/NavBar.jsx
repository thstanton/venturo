import UserLogin from "../UserLogin/UserLogin";

export default function NavBar() {
    return (
        <header className='flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow'>
            <UserLogin/>
        </header>
    )
}