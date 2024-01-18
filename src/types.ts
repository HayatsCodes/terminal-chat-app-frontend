export interface HeaderProps {
    isClickedMenu: boolean;
    updateIsClickedMenu: React.Dispatch<React.SetStateAction<void>>;
  }

  export  type HeroProps = Omit<HeaderProps, 'updateIsClickedMenu'>;
