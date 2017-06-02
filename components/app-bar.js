import Appbar from 'muicss/lib/react/appbar'
import Container from 'muicss/lib/react/container'

export default () => (
  <Appbar>
    <Container>
      <table width="100%">
        <tbody>
          <tr className="mui--appbar-height">
            <td className="mui--text-title">Webvd-player</td>
            <td/>
          </tr>
        </tbody>
      </table>
    </Container>
  </Appbar>
)