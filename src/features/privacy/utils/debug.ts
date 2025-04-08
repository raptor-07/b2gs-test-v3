const DEBUG_PREFIX = "[Privacy]";

export const privacyDebug = {
  init: (...args: unknown[]) => 
    console.log(DEBUG_PREFIX, "Initializing:", ...args),
  
  consent: (...args: unknown[]) => 
    console.log(DEBUG_PREFIX, "Consent:", ...args),
  
  storage: (...args: unknown[]) => 
    console.log(DEBUG_PREFIX, "Storage:", ...args),
  
  analytics: (...args: unknown[]) => 
    console.log(DEBUG_PREFIX, "Analytics:", ...args),
  
  error: (...args: unknown[]) => 
    console.error(DEBUG_PREFIX, "Error:", ...args),
  
  banner: (...args: unknown[]) => 
    console.log(DEBUG_PREFIX, "Banner:", ...args),

  group: (label: string) => {
    console.group(`${DEBUG_PREFIX} ${label}`);
    return {
      end: () => console.groupEnd()
    };
  }
};
