<template>
  <div>


    <Header uMb="x8" />


    <Container uMb="x8">

      <Grid align="middle" uMb="x8">
        <GridColumn uSize="1/2">
          <H1 size="ms3" class="hello" uWeight="bold">Dashboard</H1>
        </GridColumn>
        <GridColumn uSize="1/2" uText="right">
          <Button>Add new</Button>
        </GridColumn>
      </Grid>


      <Grid gutter="x4" align="middle" uText="center" uMb="x8">
        <GridColumn uSize="1/3@sm" uMb="x2@xs">
          <Card>
            <H2 size="ms6" uColor="purple" uMb="x3">10</H2>
            <P size="ms1">Published posts</P>
          </Card>
        </GridColumn>
        <GridColumn uSize="1/3@sm" uMb="x2@xs">
          <Card>
            <H2 size="ms6" uColor="red" uMb="x3">10</H2>
            <P size="ms1">Deleted posts</P>
          </Card>
        </GridColumn>
        <GridColumn uSize="1/3@sm" uMb="x2@xs">
          <Card>
            <H2 size="ms6" uColor="grey-dark" uMb="x3">10</H2>
            <P size="ms1">Scheduled posts</P>
          </Card>
        </GridColumn>
      </Grid>


      <Card>
        <Grid align="middle" uMb="x5">
          <GridColumn uSize="1/2">
            <H2 size="ms2" uWeight="bold">All posts</H2>
          </GridColumn>
          <GridColumn uSize="1/2" uText="right">
            <Button type="outline">View all</Button>
          </GridColumn>
        </Grid>

        <List type="block">
          <ListItem uMb="x3">
            <Post
              title="Explain the archicture and overall logic behind iota CSS"
              date="18/7/2017" />
          </ListItem>
          <ListItem uMb="x3">
            <Post
              title="Explain the archicture and overall logic behind iota CSS"
              date="18/7/2017" />
          </ListItem>
          <ListItem uMb="x3">
            <Post
              title="Explain the archicture and overall logic behind iota CSS"
              date="18/7/2017" />
          </ListItem>
          <ListItem uMb="x3">
            <Post
              title="Explain the archicture and overall logic behind iota CSS"
              date="18/7/2017" />
          </ListItem>
        </List>
      </Card>


    </Container>


    <Footer />


  </div>
</template>

<style lang="scss">
  @import 'scss/main'
</style>
