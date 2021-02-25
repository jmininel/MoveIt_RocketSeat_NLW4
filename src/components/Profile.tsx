import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={styles.profileContainer}>
          <img src="https://github.com/diego3g.png" alt="Diego Fernandes"></img>  
          <div>
              <strong>Diego</strong>
              <p>
                  <img src="icons/level.svg" alt="Level" />
                  Leve 1
                </p>
          </div>
        </div>
    );
}