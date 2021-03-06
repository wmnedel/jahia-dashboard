package org.jahia.modules.jahiadashboard.graphql;

import org.jahia.modules.graphql.provider.dxm.DXGraphQLExtensionsProvider;
import org.osgi.service.component.annotations.Component;

import java.util.Arrays;
import java.util.Collection;

/**
 * Main GraphQL extension provider for the Jahia Dashboard
 */
@Component(immediate = true, service= DXGraphQLExtensionsProvider.class)
public class DXGraphQLProvider implements DXGraphQLExtensionsProvider {

    @Override
    public Collection<Class<?>> getExtensions() {
        return Arrays.<Class<?>>asList(QueryExtensions.class);
    }
}
