import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";

function SidePanel() {
    return (
        <div>
            {/* For large screens */}
            <div className="hidden lg:block">
                <Card
                    className="h-[calc(80vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none bg-transparent">
                    <div className="mb-2 p-4">
                        <Typography variant="h5" color="blue-gray">
                            Repo Radar
                        </Typography>
                    </div>
                    <List>
                        <ListItem>
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            <span className="hidden sm:inline">Dashboard</span>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <InboxIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            <span className="hidden sm:inline">Inbox</span>
                            <ListItemSuffix>
                                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full"/>
                            </ListItemSuffix>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            <span className="hidden sm:inline">Profile</span>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            <span className="hidden sm:inline">Settings</span>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <PowerIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            <span className="hidden sm:inline">Log Out</span>
                        </ListItem>
                    </List>
                </Card>
            </div>

            {/* For small screens */}
            <div
                className="lg:hidden flex justify-center items-center bg-transparent pt-5 px-10 gap-4 text-blue-gray">
                <PresentationChartBarIcon className="h-5 w-5" fill='#3c5058'/>
                <InboxIcon className="h-5 w-5" fill='#3c5058'/>
                <UserCircleIcon className="h-5 w-5" fill='#3c5058'/>
                <Cog6ToothIcon className="h-5 w-5" fill='#3c5058'/>
                <PowerIcon className="h-5 w-5" fill='#3c5058'/>
            </div>
        </div>
    );
}

export default SidePanel;
