import {
  OrganizationProfile,
  OrganizationSwitcher,
  UserButton,
} from '@clerk/nextjs';

export function Header() {
  return (
    <div className="border-b py-4 bg-slate-200">
      <div className="container mx-auto justify-between flex items-center">
        <div className="flex">
          <p>SOCIAL</p>
          <p className="font-bold">PLANNER</p>
        </div>
        <div className="flex gap-2">
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </div>
    </div>
  );
}
