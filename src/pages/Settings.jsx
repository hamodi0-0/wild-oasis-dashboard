import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import { useSettings } from "../features/settings/useSettings";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";

function Settings() {
  const { isLoading, settings } = useSettings();
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm settings={settings} />
    </>
  );
}

export default Settings;
