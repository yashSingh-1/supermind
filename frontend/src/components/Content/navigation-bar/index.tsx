"use client";

import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import { usePaths } from "@/hooks/use-nav";
import { Menu } from "lucide-react";
import Sheet from "../sheet";
import { HelpDuoToneWhite } from "@/icons";
import { Separator } from "@radix-ui/react-separator";
import ClerkAuthState from "../clerk-auth-state";
import Items from "../Sidebar/Items";
import Upgrade from "../Sidebar/Upgrade";
import SubscriptionPlan from "../subscription-plan";
import Logo from "../Logo";
import CreateAutomations from "../create-automations/CreateAutomations";
import SearchBar from "../Search/search";
import Notifications from "../Notifications/notifications";
import MainBreadCrumb from "../breadcrumb/MainBreadCrumb";

type Props = {
  slug: string;
};

const NavigationBar = ({ slug }: Props) => {
  const { page } = usePaths();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;
  return (
    <div>
      {currentPage && (
        <div className="flex flex-col">
          <div className="flex gap-x-3 lg:gap-x-5 justify-end">
            <div className="lg:hidden flex items-center flex-1 gap-x-2 justify-between">
              <Sheet trigger={<Menu />} className="lg:hidden" side="left">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-col py-3">
                      <Items page={page} slug={slug} />
                    </div>
                    <div className="px-16">
                      <Separator
                        orientation="horizontal"
                        className="bg-[#2b2b2e]"
                      />
                    </div>
                    <div className="px-3 flex flex-col gap-y-5 pt-10">
                      <div className="flex gap-x-2">
                        <ClerkAuthState />
                        <p className="text-[#9B9CA0]">Profile</p>
                      </div>
                      <div className="flex gap-x-3">
                        <HelpDuoToneWhite />
                        <p className="text-[#9B9CA0]">Help</p>
                      </div>
                    </div>
                  </div>
                  <SubscriptionPlan type={"FREE"}>
                    <div className="flex-1 flex flex-col justify-end ">
                      <Upgrade />
                    </div>
                  </SubscriptionPlan>
                </div>
              </Sheet>
            </div>

            {/* <SearchBar /> */}
            {/* <CreateAutomations /> */}
            {/* <Notifications /> */}
          </div>
          <MainBreadCrumb page={page === slug ? 'Home' : page} slug={slug} />
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
