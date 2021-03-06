import gql from 'graphql-tag';
import {PredefinedFragments} from '@jahia/data-helper';

const DashboardQuery = gql`
    query WelcomeScreen {
        dashboard {
            toolsAccess
            modules {
                id
                name
                description
                version
                inDevelopment
            }
        }
    }
`;

const PermissionsQuery = gql`
    query WelcomeScreenPermissions {
        jcr {
            rootNode: nodeByPath(path: "/") {
                studioModeAccess: hasPermission(permissionName: "studioModeAccess")
                adminVirtualSites: hasPermission(permissionName: "adminVirtualSites")
                ...NodeCacheRequiredFields
            }
        }
    }
    ${PredefinedFragments.nodeCacheRequiredFields.gql}
`;

export {DashboardQuery, PermissionsQuery};
