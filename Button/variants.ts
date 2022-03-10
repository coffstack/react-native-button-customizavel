interface ButtonStyle {
  button: {
    backgroundColor: string;
    borderWidth?: number;
    borderColor?: string;
  };
  title: {
    color: string;
  };
  icon: {
    color: string;
  };
}

export interface ButtonVariant {
  enabled: ButtonStyle;
  disabled: ButtonStyle;
}

const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: "#1D013F",
    },
    title: {
      color: "#FFF",
    },
    icon: {
      color: "#FFF",
    },
  },
  disabled: {
    button: {
      backgroundColor: "#B8B8B8",
    },
    title: {
      color: "#FFF",
    },
    icon: {
      color: "#FFF",
    },
  },
};
const buttonOutline: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: "#1D013F",
    },
    title: {
      color: "#1D013F",
    },
    icon: {
      color: "#1D013F",
    },
  },
  disabled: {
    button: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: "#B8B8B8",
    },
    title: {
      color: "#B8B8B8",
    },
    icon: {
      color: "#B8B8B8",
    },
  },
};

export const variants = {
  primary: buttonPrimary,
  outline: buttonOutline,
};
