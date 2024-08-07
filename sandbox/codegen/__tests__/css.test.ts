import { describe, expect, test } from 'vitest'
import { css } from '../styled-system/css/css'

describe('css', () => {
  test('native CSS prop and value', () => {
    const className = css({ display: 'flex' })

    expect(className).toMatchInlineSnapshot('"d_flex"')
  })

  test('token value', () => {
    const className = css({ color: 'blue.300' })

    expect(className).toMatchInlineSnapshot(`"c_blue.300"`)
  })

  test('utility prop', () => {
    const className = css({ srOnly: true })

    expect(className).toMatchInlineSnapshot('"sr_true"')
  })

  test('shorthand prop', () => {
    const className = css({ bg: 'red' })

    expect(className).toMatchInlineSnapshot('"bg_red"')
  })

  test('object condition prop', () => {
    const className = css({ bg: { _hover: 'yellow.100' } })

    expect(className).toMatchInlineSnapshot('"hover:bg_yellow.100"')
  })

  test('condition prop', () => {
    const className = css({ _hover: { bg: 'yellow.200' } })

    expect(className).toMatchInlineSnapshot('"hover:bg_yellow.200"')
  })

  test('nested condition prop', () => {
    const className = css({ _hover: { _dark: { bg: 'pink' } } })

    expect(className).toMatchInlineSnapshot('"hover:dark:bg_pink"')
  })

  test('arbitrary value', () => {
    const className = css({ color: '#fff' })

    expect(className).toMatchInlineSnapshot(`"c_#fff"`)
  })

  test('arbitrary selector', () => {
    const className = css({ ['&:data-panda']: { display: 'flex' } })

    expect(className).toMatchInlineSnapshot('"[&:data-panda]:d_flex"')
  })

  test('responsive condition', () => {
    const className = css({ sm: { bg: 'purple' } })

    expect(className).toMatchInlineSnapshot('"sm:bg_purple"')
  })

  test('responsive array syntax prop', () => {
    const className = css({ bg: ['cyan.100', 'cyan.200', null, undefined, 'cyan.300'] })

    expect(className).toMatchInlineSnapshot('"bg_cyan.100 sm:bg_cyan.200 xl:bg_cyan.300"')
  })

  test('using inline token helper - in value', () => {
    const className = css({ border: '1px solid token(colors.blue.400)' })

    expect(className).toMatchInlineSnapshot(`"bd_1px_solid_token(colors.blue.400)"`)
  })

  test('using inline token helper - in condition', () => {
    const className = css({ '@media screen and (min-width: token(sizes.4xl))': { bg: 'blue.500' } })

    expect(className).toMatchInlineSnapshot('"[@media_screen_and_(min-width:_token(sizes.4xl))]:bg_blue.500"')
  })

  test('nested condition prop with array syntax', () => {
    const className = css({ _hover: { _dark: { bg: ['pink.100', 'pink.200'] } } })

    expect(className).toMatchInlineSnapshot('"hover:dark:bg_pink.100 hover:dark:sm:bg_pink.200"')
  })

  test('same prop', () => {
    const className = css({ bgColor: 'red.100', backgroundColor: 'red.200' })

    expect(className).toMatchInlineSnapshot(`"bg-c_red.200"`)

    const className2 = css({ backgroundColor: 'red.300', bgColor: 'red.400' })

    expect(className2).toMatchInlineSnapshot(`"bg-c_red.400"`)
  })

  test('merging styles', () => {
    const className = css({ fontSize: 'sm', bgColor: 'red.500' }, { backgroundColor: 'red.600' })

    expect(className).toMatchInlineSnapshot(`"fs_sm bg-c_red.600"`)
  })

  test('merging styles with nested conditions', () => {
    const className = css({ fontSize: 'sm', _hover: { color: 'green.100' } }, { _hover: { color: 'green.200' } })

    expect(className).toMatchInlineSnapshot(`"fs_sm hover:c_green.200"`)
  })

  test('merging styles with object condition prop', () => {
    const className = css({ fontSize: 'md' }, { fontSize: { base: 'lg', sm: 'xs' } })

    expect(className).toMatchInlineSnapshot('"fs_lg sm:fs_xs"')
  })

  test('merging styles with array item', () => {
    const className = css({ fontSize: 'sm', bgColor: 'red.500' }, [
      { backgroundColor: 'red.600' },
      { fontSize: '12px' },
    ])

    expect(className).toMatchInlineSnapshot(`"fs_12px bg-c_red.600"`)
  })
})

describe('css.raw', () => {
  test('native CSS prop and value', () => {
    const styles = css.raw({ display: 'flex' })

    expect(styles).toMatchInlineSnapshot(`
      {
        "display": "flex",
      }
    `)
  })

  test('token value', () => {
    const styles = css.raw({ color: 'blue.300' })

    expect(styles).toMatchInlineSnapshot(`
      {
        "color": "blue.300",
      }
    `)
  })

  test('utility prop', () => {
    const styles = css.raw({ srOnly: true })

    expect(styles).toMatchInlineSnapshot(`
      {
        "srOnly": true,
      }
    `)
  })

  test('shorthand prop', () => {
    const styles = css.raw({ bg: 'red' })

    expect(styles).toMatchInlineSnapshot(`
      {
        "bg": "red",
      }
    `)
  })

  test('object condition prop', () => {
    const styles = css.raw({ bg: { _hover: 'yellow.100' } })

    expect(styles).toMatchInlineSnapshot(`
      {
        "bg": {
          "_hover": "yellow.100",
        },
      }
    `)
  })

  test('condition prop', () => {
    const styles = css.raw({ _hover: { bg: 'yellow.200' } })

    expect(styles).toMatchInlineSnapshot(`
      {
        "_hover": {
          "bg": "yellow.200",
        },
      }
    `)
  })

  test('nested condition prop', () => {
    const styles = css.raw({ _hover: { _dark: { bg: 'pink' } } })

    expect(styles).toMatchInlineSnapshot(`
      {
        "_hover": {
          "_dark": {
            "bg": "pink",
          },
        },
      }
    `)
  })

  test('arbitrary value', () => {
    const styles = css.raw({ color: '#fff' })

    expect(styles).toMatchInlineSnapshot(`
      {
        "color": "#fff",
      }
    `)
  })

  test('arbitrary selector', () => {
    const styles = css.raw({ ['&:data-panda']: { display: 'flex' } })

    expect(styles).toMatchInlineSnapshot(`
      {
        "&:data-panda": {
          "display": "flex",
        },
      }
    `)
  })

  test('responsive condition', () => {
    const styles = css.raw({ sm: { bg: 'purple' } })

    expect(styles).toMatchInlineSnapshot(`
      {
        "sm": {
          "bg": "purple",
        },
      }
    `)
  })

  test('responsive array syntax prop', () => {
    const styles = css.raw({ bg: ['cyan.100', 'cyan.200', null, undefined, 'cyan.300'] })

    expect(styles).toMatchInlineSnapshot(`
      {
        "bg": [
          "cyan.100",
          "cyan.200",
          null,
          undefined,
          "cyan.300",
        ],
      }
    `)
  })

  test('using inline token helper - in value', () => {
    const styles = css.raw({ border: '1px solid token(colors.blue.400)' })

    expect(styles).toMatchInlineSnapshot(`
      {
        "border": "1px solid token(colors.blue.400)",
      }
    `)
  })

  test('using inline token helper - in condition', () => {
    const styles = css.raw({ '@media screen and (min-width: token(sizes.4xl))': { bg: 'blue.500' } })

    expect(styles).toMatchInlineSnapshot(`
      {
        "@media screen and (min-width: token(sizes.4xl))": {
          "bg": "blue.500",
        },
      }
    `)
  })

  test('nested condition prop with array syntax', () => {
    const styles = css.raw({ _hover: { _dark: { bg: ['pink.100', 'pink.200'] } } })

    expect(styles).toMatchInlineSnapshot(`
      {
        "_hover": {
          "_dark": {
            "bg": [
              "pink.100",
              "pink.200",
            ],
          },
        },
      }
    `)
  })

  test('same prop', () => {
    const styles = css.raw({ bgColor: 'red.100', backgroundColor: 'red.200' })

    expect(styles).toMatchInlineSnapshot(`
      {
        "backgroundColor": "red.200",
        "bgColor": "red.100",
      }
    `)

    const styles2 = css.raw({ backgroundColor: 'red.300', bgColor: 'red.400' })

    expect(styles2).toMatchInlineSnapshot(`
      {
        "backgroundColor": "red.300",
        "bgColor": "red.400",
      }
    `)
  })

  test('merging styles', () => {
    const styles = css.raw({ fontSize: 'sm', bgColor: 'red.500' }, { backgroundColor: 'red.600' })

    expect(styles).toMatchInlineSnapshot(`
      {
        "backgroundColor": "red.600",
        "fontSize": "sm",
      }
    `)
  })

  test('merging styles with nested conditions', () => {
    const styles = css.raw({ fontSize: 'sm', _hover: { color: 'green.100' } }, { _hover: { color: 'green.200' } })

    expect(styles).toMatchInlineSnapshot(`
      {
        "_hover": {
          "color": "green.200",
        },
        "fontSize": "sm",
      }
    `)
  })

  test('merging styles with object condition prop', () => {
    const styles = css.raw({ fontSize: 'md' }, { fontSize: { base: 'lg', sm: 'xs' } })

    expect(styles).toMatchInlineSnapshot(`
      {
        "fontSize": {
          "base": "lg",
          "sm": "xs",
        },
      }
    `)
  })

  test('merging styles with array item', () => {
    const styles = css.raw({ fontSize: 'sm', bgColor: 'red.500' }, [
      { backgroundColor: 'red.600' },
      { fontSize: '12px' },
    ])

    expect(styles).toMatchInlineSnapshot(`
      {
        "backgroundColor": "red.600",
        "fontSize": "12px",
      }
    `)
  })
})
