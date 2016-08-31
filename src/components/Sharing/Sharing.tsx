import * as React from 'react'

const styles: any = require('./Sharing.module.styl')

interface Props {
}

interface State {
}

export default class Sharing extends React.Component<Props, State> {

  render() {
    return (
      <div className='db'>
        <h1 style={{
          fontWeight: 300,
          color: 'rgb(242, 107, 0)',
          paddingTop: 30,
          paddingBottom: '0.92rem',
          marginTop: 'calc(2.3rem - 30px)',
          marginBottom: '1.6rem',
          borderBottom: '1px solid rgba(0, 0, 0, 0.0980392)',
        }}>
          You did it! Well done!
        </h1>
        <p>
          We hope you enjoyed learning Relay. We put a lot of work into these resources and hope to reach as many developers as possible. You can help us by sharing it:
        </p>
        <div className='flex justify-center'>
          <a href="" className={styles.button} style={{background: '#3cf'}}>Share on Twitter</a>
          <a href="" className={`ml2 ${styles.button}`} style={{background: '#3b5998'}}>Share on Facebook</a>
        </div>
      </div>
    )
  }
}
