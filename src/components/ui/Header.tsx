
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"


const Header = () => {
    return (
        <div className="flex justify-between py-7 bg-black px-20">
            <h2 className="text-2xl font-bold text-white">Logo</h2>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>Home</MenubarTrigger>
                    <MenubarTrigger>About</MenubarTrigger>
                    <MenubarTrigger>Projects</MenubarTrigger>
                    <MenubarTrigger>Blog</MenubarTrigger>
                    <MenubarTrigger>Contact</MenubarTrigger>
                    {/* <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>New Window</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Share</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Print</MenubarItem>
                    </MenubarContent> */}
                </MenubarMenu>
            </Menubar>

        </div>
    );
};

export default Header;