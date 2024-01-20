import * as icons from 'react-bootstrap-icons';


export const Icon = ({ iconName, ...props }) => {
  const BootstrapIcon = icons[iconName];
  return <BootstrapIcon {...props} />;
}