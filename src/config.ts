import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
  home: {
    path: "/",
    title: "Home",
  },
  methods: {
    path: "/methods",
    title: "Methods",
    nestedNavItems: {
      seismic: {
        path: "/methods/seismic",
        title: "Seismic",
        nestedNavItems: {
          reflection: {
            path: "/methods/seismic/reflection",
            title: "Reflection",
          },
          srt: {
            path: "/methods/seismic/srt",
            title: "SRT",
          },
          masw: {
            path: "/methods/seismic/masw",
            title: "MASW",
          },
          hvsr: {
            path: "/methods/seismic/hvsr",
            title: "HVSR",
          },
          vsp: {
            path: "/methods/seismic/vsp",
            title: "VSP",
          },
          das: {
            path: "/methods/seismic/das",
            title: "DAS",
          },
        },
      },
      em: {
        path: "/methods/em",
        title: "Electromagnetic",
        nestedNavItems: {
          gpr: {
            path: "/methods/em/gpr",
            title: "GPR",
          },
          ert: {
            path: "/methods/em/ert",
            title: "ERT",
          },
          tem: {
            path: "/methods/em/tem",
            title: "TEM",
          },
          fem: {
            path: "/methods/em/fem",
            title: "FEM",
          },
          ip: {
            path: "/methods/em/ip",
            title: "IP",
          },
          sp: {
            path: "/methods/em/sp",
            title: "SP",
          },
          tdr: {
            path: "/methods/em/tdr",
            title: "TDR",
          },
          nmr: {
            path: "/methods/em/nmr",
            title: "nmr",
          },
          gammaRay: {
            path: "/methods/em/gamma-ray",
            title: "Gamma ray",
          },
        },
      },
      potentialField: {
        path: "/methods/potential-field",
        title: "Potential field",
        nestedNavItems: {
          magnetometry: {
            path: "/methods/potential-field/magnetometry",
            title: "Magnetometry",
          },
          gravimetry: {
            path: "/methods/potential-field/gravimetry",
            title: "Gravimetry",
          },
        },
      },
    },
  },
  applications: {
    path: "/applications",
    title: "Applications",
  },
  industries: {
    path: "/industries",
    title: "Industries",
    nestedNavItems: {
      civil: {
        path: "/industries/civil",
        title: "Civil engineering",
      },
      offshoreWind: {
        path: "/industries/offshore-wind",
        title: "Offshore wind",
      },
      geology: {
        path: "/industries/geology",
        title: "Geology",
      },
      hydrology: {
        path: "/industries/hydrology",
        title: "Hydrology",
      },
      environment: {
        path: "/industries/environment",
        title: "Environmental engineering",
      },
      agriculture: {
        path: "/industries/agriculture",
        title: "Agriculture",
      },
      mining: {
        path: "/industries/mining",
        title: "Mining",
      },
      oilAndGas: {
        path: "/industries/oil-and-gas",
        title: "Oil & Gas",
      },
    },
  },
  deployment: {
    path: "/deployment",
    title: "Deployment",
    nestedNavItems: {
      onshore: {
        path: "/deployment/onshore",
        title: "Onshore",
      },
      offshore: {
        path: "/deployment/offshore",
        title: "Offshore",
      },
      airborne: {
        path: "/deployment/airborne",
        title: "Airborne",
      },
      borehole: {
        path: "/deployment/borehole",
        title: "Borehole",
      },
    },
  },
  about: {
    path: "/about",
    title: "about",
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const civilNestedNavItems: NavItems = {
  industries: {
    path: "/industries",
    title: "Industries",
    nestedNavItems: {
      civil: {
        path: "/industries/civil",
        title: "Civil engineering",
        nestedNavItems: {
          aviation: {
            path: "/industries/civil/aviation",
            title: "Aviation",
          },
          bridges: {
            path: "/industries/civil/bridges",
            title: "Bridges",
          },
          buildings: {
            path: "/industries/civil/buildings",
            title: "Buildings",
          },
          geotech: {
            path: "/industries/civil/geotech",
            title: "Geotechnical engineering",
          },
          highways: {
            path: "/industries/civil/highways",
            title: "Highways",
          },
          rail: {
            path: "/industries/civil/rail",
            title: "Rail",
          },
          tunnelling: {
            path: "/industries/civil/tunnelling",
            title: "Tunnelling",
          },
          hydraulic: {
            path: "/industries/civil/hydraulic",
            title: "Hydraulic engineering",
          },
        },
      },
    },
  },
};
