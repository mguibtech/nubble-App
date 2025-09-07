import { SimpleLogo } from '@brand';

import { Box, BoxProps, Icon } from '@components';
import { useAppSafeArea } from '@hooks';

export function HomeHeader() {

    const { top } = useAppSafeArea();

    return (
        <Box {...$header} style={{ paddingTop: top }}>
            {/* <Box backgroundColor="error" height={16} width={70} /> */}
            <SimpleLogo width={70} />
            <Box flexDirection="row" alignItems="center">
                <Box mr="s24">
                    <Icon name="search" size={24} />
                </Box>
                <Box mr="s24">
                    <Icon name="bell" size={24} />
                </Box>
                <Icon name="chat" size={24} />

            </Box>
        </Box>
    );
}

const $header: BoxProps = {
    paddingBottom: 's24',
    paddingHorizontal: 's24',
    flexDirection: 'row',
    justifyContent: 'space-between',
};
