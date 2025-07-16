import { Home, UserRoundPen } from "lucide-react";
import { Sidebar, SidebarMenuButton, SidebarMenuItem, SidebarMenu, SidebarGroupContent, SidebarGroupLabel, SidebarGroup, SidebarContent } from "./ui/sidebar";

const AppSideBar = () =>{
    const navItem = [
        {
          title: "Home",
          url: "/",
          icon:  Home
        },
        {
          title: "Submit Info",
          url: "/form-page",
          icon:  UserRoundPen
        }
      ]
    return(
        <Sidebar  >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>FRC ADMIN</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItem.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
}
export default AppSideBar;