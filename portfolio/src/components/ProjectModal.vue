<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="container-project">
        <h2>{{ project.title }}</h2>
        <div class="img">
          <div class="group-btn">
            <button class="btn-utils">
              <i class="fa-brands fa-github"></i>
              Ver código
            </button>
            <button class="btn-utils">
              <i class="fa-solid fa-link"></i>
              Ver projeto online
            </button>
            <button class="btn-utils">
              <i class="fa-brands fa-figma"></i>
              Ver prótotipo do Figma
            </button>
          </div>
          <img class="project-img" :src="project.image" :alt="project.title" />
        </div>
        <div class="description">
          <div class="about">
            <div class="title">
              <i class="fa-solid fa-laptop-code"></i>
              Sobre o projeto
            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Pharetra dolor sit venenatis elementum neque imperdiet vitae dignissim. Fermentum nunc lacus tincidunt tellus nisl lectus tempus ut. Adipiscing lacus duis phasellus at vel sit tincidunt duis in. Turpis et quis varius ac.</p>
          </div>
          <div class="info">
            <div class="title">
              <i class="fa-solid fa-circle-info"></i>
              Informações
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  position: relative;
  background: var(--color-dark);
  padding: 2.75rem 3rem;
  border-radius: 8px;
  width: 71.313rem;
  height: 55rem;
  border: 1px solid var(--color-grey);
  overflow-y: auto;
  overflow-x: hidden;

  .container-project {
    display: flex;
    flex-direction: column;
    gap: 2.813rem;
    padding: 10px;
    width: 65.313rem;
    max-height: 45rem;

    h2 {
      font-size: 2rem;
      color: var(--color-light);
      font-weight: var(--font-weight-semibold);
    }

    .img {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.875rem;

      .group-btn {
        display: flex;
        flex-direction: row;
        gap: 10px;

        .btn-utils {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10px;

          color: var(--color-dark);
          font-size: 1rem;
          font-weight: var(--font-weight-regular);
          background-color: var(--color-light-1);
          border: none;
          cursor: pointer;
          transition: opacity 0.3s ease;
          padding: 10px 14px;
          border-radius: 4px;

          font-family: var(--font-family);
        }

        .btn-utils i {
          font-size: 1.25rem;
        }

        .btn-utils:hover {
          opacity: 0.7;
        }
      }

      .project-img {
        width: 100%;
        height: 31.375rem;
        border-radius: 8px;
        overflow: hidden;
      }

      .project-img img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }

    .description {
      display: flex;
      flex-direction: row;
      padding-bottom: 2rem;
      gap: 1.5rem;

      .about {
        width: 100%;
        padding: 1.5rem;
        border: 1px solid var(--color-grey);
        border-radius: 4px;
        background-color: var(--color-dark-1);

        .title {
          color: var(--color-light);
          font-size: 1.375rem;
          font-weight: var(--font-weight-semibold);
        }
        
        .title i {
          margin-right: 0.5rem;
        }

        p {
          margin-top: 1.5rem;
          font-size: 1rem;
          color: var(--color-light--1);
          font-weight: var(--font-weight-regular);
        }
      }

      .info {
        width: 39.875rem;
        padding: 1.5rem;
        border: 1px solid var(--color-grey);
        border-radius: 4px;
        background-color: var(--color-dark-1);

        .title {
          color: var(--color-light);
          font-size: 1.375rem;
          font-weight: var(--font-weight-semibold);
        }
        
        .title i {
          margin-right: 0.5rem;
        }
      }
    }
  }
}

.close-btn {
  position: absolute;
  top: 22px;
  right: 30px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--color-light);
}

.close-btn:hover {
  opacity: 0.7;
}
</style>
