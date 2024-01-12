import React from 'react'
import {View} from 'react-native'
import {CenteredView, ScrollView} from '#/view/com/util/Views'

import {atoms as a, useTheme, ThemeProvider} from '#/alf'
import {useSetColorMode} from '#/state/shell'
import {Button} from '#/view/com/Button'

import {Theming} from './Theming'
import {Typography} from './Typography'
import {Spacing} from './Spacing'
import {Buttons} from './Buttons'
import {Forms} from './Forms'
import {Dialogs} from './Dialogs'
import {Breakpoints} from './Breakpoints'

export function Storybook() {
  const t = useTheme()
  const setColorMode = useSetColorMode()

  return (
    <ScrollView>
      <CenteredView style={[t.atoms.bg]}>
        <View style={[a.p_xl, a.gap_2xl, {paddingBottom: 200}]}>
          <View style={[a.flex_row, a.align_start, a.gap_md]}>
            <Button
              type="secondary"
              size="small"
              accessibilityLabel='Set theme to "system"'
              accessibilityHint="Set theme to system default"
              onPress={() => setColorMode('system')}>
              System
            </Button>
            <Button
              type="secondary"
              size="small"
              accessibilityLabel='Set theme to "system"'
              accessibilityHint="Set theme to system default"
              onPress={() => setColorMode('light')}>
              Light
            </Button>
            <Button
              type="secondary"
              size="small"
              accessibilityLabel='Set theme to "system"'
              accessibilityHint="Set theme to system default"
              onPress={() => setColorMode('dark')}>
              Dark
            </Button>
          </View>

          <ThemeProvider theme="light">
            <Theming />
          </ThemeProvider>
          <ThemeProvider theme="dark">
            <Theming />
          </ThemeProvider>

          <Typography />
          <Spacing />
          <Buttons />
          <Forms />
          <Dialogs />
          <Breakpoints />
        </View>
      </CenteredView>
    </ScrollView>
  )
}
