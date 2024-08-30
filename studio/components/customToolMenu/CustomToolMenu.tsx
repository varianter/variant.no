import { ToolMenuProps } from 'sanity';
import { Inline } from '@sanity/ui';
import { LinkButton } from '../linkButton/LinkButton';
import styles from './customToolMenu.module.css';

export default function CustomToolMenu(props: ToolMenuProps) {
  return (
    <Inline>
      {props.renderDefault(props)}
      <LinkButton />
    </Inline>
  )
}