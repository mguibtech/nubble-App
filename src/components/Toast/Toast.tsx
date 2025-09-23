import { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { ToastPosition, useToast, useToastService } from '@services';

import { ToastContent } from './components/ToastContent';

const DEFAULT_DURATION = 4000;


export function Toast() {
    const toast = useToast();
    const { hiddenToast } = useToastService();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const runEnterAnimation = useCallback(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    const runExitAnimation = useCallback(
        (callback: Animated.EndCallback) => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }).start(callback);
        }, [fadeAnim]);

    useEffect(() => {
        if (toast) {
            runEnterAnimation();
            setTimeout(() => {
                runExitAnimation(hiddenToast);
            }, toast.duration || DEFAULT_DURATION);
        }
    }, [hiddenToast, runEnterAnimation, runExitAnimation, toast]);

    if (!toast) { return null; }

    const position: ToastPosition = toast?.position || 'top';

    return (
        <Animated.View
            style={{
                position: 'absolute',
                alignSelf: 'center',
                opacity: fadeAnim,
                [position]: 100,
            }}>
            <ToastContent toast={toast} />
        </Animated.View>
    );
}
