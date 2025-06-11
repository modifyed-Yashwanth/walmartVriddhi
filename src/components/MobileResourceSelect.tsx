import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Tab {
  id: string;
  label: string;
}

interface MobileResourceSelectProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
}

const MobileResourceSelect = ({
  tabs,
  activeTab,
  onTabChange,
}: MobileResourceSelectProps) => {
  return (
    <div className="w-full max-w-md px-4 lg:hidden">
      <Select value={activeTab} onValueChange={onTabChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {tabs.map((tab) => (
            <SelectItem key={tab.id} value={tab.id}>
              {tab.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default MobileResourceSelect;
